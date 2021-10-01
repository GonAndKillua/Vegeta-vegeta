import React, { useState } from "react";
import "./Conversation.css";
import img from "../../images/img1.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";

const Conversation = ({
  userdata,
  DesktopToggler,
  setDesktopToggler,
  mobileToggler,
  setMobileToggler,
  setuserdata,
}) => {
  const dummyCarrer = ["Engineering", "Medical"];
  const dummySubject = ["Data Science", "Microbio", "Economics"];
  const [editProfile, setEditProfile] = useState(true);
  const [editState, seteditState] = useState({
    fullname: "",
    uname: "",
  });

  const onValueChange = (e) => {
    seteditState({ ...editState, [e.target.name]: e.target.name });
  };

  const updateHandler = async (e) => {
    const fullname = editState.fullname.split(" ");
    console.log("fullName:", fullname);
    try {
      const response = await axios.patch("/auth/editprofile", {
        firstName: fullname[0],
        lastName: fullname[1],
        email: userdata.email,
        uname: editState.uname,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }

    setEditProfile(!editProfile);
  };
  return (
    <>
      <div className="color">
        <div className="contain">
          {/* Start toggle the edit profile button  */}
          {editProfile ? (
            <button
              className="editbutton"
              onClick={() => setEditProfile(!editProfile)}
            >
              <i class="bi bi-pencil-square edit"></i>
            </button>
          ) : (
            <button className="checkbutton" onClick={(e) => updateHandler(e)}>
              <i class="bi bi-check2-square check"></i>
            </button>
          )}
          {/* End toggle the edit profile button  */}

          {/* Start Desktop toggle button  */}
          {DesktopToggler && (
            <button
              className="crossButtoni"
              onClick={() => {
                setDesktopToggler(!DesktopToggler);
              }}
            >
              <i class="bi bi-x-square crossi"></i>
            </button>
          )}
          {/* Start Mobile toggle button  */}
          {!mobileToggler && (
            <button
              className="crossButtoni"
              onClick={() => {
                setMobileToggler(!mobileToggler);
              }}
            >
              <i class="bi bi-x-square crossi"></i>
            </button>
          )}

          <div className="conversation">
            {editProfile ? (
              <img
                className="conversationImg"
                src={userdata.photo || img}
                alt={userdata.fullname || "Mohit"}
              />
            ) : (
              <label for="inputUpload" class="custom-file-upload">
                Change image
                <input
                  type="file"
                  placeholder={userdata.photo}
                  id="inputUpload"
                />
              </label>
            )}

            {editProfile ? (
              <span className="conversationName">
                {userdata.fullname || "Mohit"}
              </span>
            ) : (
              <div class="form-outline">
                <input
                  type="text"
                  id="fName"
                  name="fullname"
                  class="form-control form-control-md"
                  placeholder={userdata.fullname || "fullname"}
                  onChange={(e) => {
                    onValueChange(e);
                  }}
                />
              </div>
            )}
          </div>

          <div className="userdetails text-center text-secondary">
            {editProfile ? (
              <span>
                <i
                  class="fa fa-graduation-cap iconcolor"
                  aria-hidden="true"
                ></i>
                &nbsp; &nbsp;
                {userdata.uname || "Marwadi University"}
              </span>
            ) : (
              <div class="form-outline">
                <input
                  type="text"
                  id="uname"
                  name="uname"
                  class="form-control form-control-md"
                  placeholder={userdata.uname || "University"}
                  onChange={(e) => {
                    onValueChange(e);
                  }}
                />
              </div>
            )}

            <hr />
          </div>

          <h5 className="scoreheading">RIASEC Score</h5>
          <h6 class="text-left">Realistic</h6>
          <div class="progress mb-2">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "45%", backgroundColor: "#3B8AC4" }}
              aria-valuenow="45"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              45
            </div>
          </div>

          <h6 class="text-left">Investigative</h6>
          <div class="progress mb-2">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "25%", backgroundColor: "#345DA7" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              25
            </div>
          </div>

          <h6 class="text-left">Artistic</h6>
          <div class="progress mb-2">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "50%", backgroundColor: "#3B8AC4" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50
            </div>
          </div>

          <h6 class="text-left">Social</h6>
          <div class="progress mb-2">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "75%", backgroundColor: "#345DA7" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75
            </div>
          </div>

          <h6 class="text-left">Enterprising </h6>
          <div class="progress mb-2">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "90%", backgroundColor: "#3B8AC4" }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90
            </div>
          </div>
          <h6 class="text-left">Conventional </h6>
          <div class="progress mb-4">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "72%", backgroundColor: "#345DA7" }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              72
            </div>
          </div>

          <div>
            <h5>
              Interested Career title:
              <ol>
                {dummyCarrer.map((carrer) => (
                  <li>{carrer}</li>
                ))}
              </ol>
            </h5>

            <h5>
              Subject Intrest:
              <ol>
                {dummySubject.map((Subject) => (
                  <li>{Subject}</li>
                ))}
              </ol>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
