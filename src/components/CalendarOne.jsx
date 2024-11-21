import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import ShareOnSocial from "react-share-on-social";
import {
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
} from "react-share";
import {
  BsFacebook,
  BsWhatsapp,
  BsTelegram,
  BsMessenger,
} from "react-icons/bs";
import Wrapper from "../assets/wrappers/Googie";

function CalendarOne({ doors }) {
  const socialURL = "https://shop.senecanticafe.ro/calendarul-cadourilor";
  const [isOpen, setIsOpen] = useState([]);

  const [submitToStorage, setSubmitToStorage] = useState(() => {
    const local = localStorage.getItem("open doors");
    if (!local) return []; // default card
    return JSON.parse(local);
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [msg, setMsg] = useState({});
  // const [hover, setHover] = useState("");

  const dayToDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    return day;
  };

  useEffect(() => {
    const local = localStorage.getItem("open doors");
    setIsOpen(local ? local : []);
  }, []);

  const openDoor = (doordate) => {
    const today = new Date();
    if (!submitToStorage.includes(doordate)) {
      setSubmitToStorage([...submitToStorage, doordate]);
    }
    // setSubmitToStorage([...submitToStorage, doordate]);

    if (dayToDate(today) === dayToDate(doordate)) {
      getMessage(doordate);
    }
  };

  const getMessage = (doordate) => {
    const today = new Date();

    if (dayToDate(today) === dayToDate(doordate)) {
      open();

      var msg = {};
      for (var i = 0; i < doors.length; i++) {
        if (doors[i].id === dayToDate(doordate)) {
          msg.code = doors[i].code;
          msg.applied = doors[i].applied;
          msg.discount = doors[i].discount;
          msg.url = doors[i].url;
          break;
        }
      }
      setMsg(msg);
    } else return;
  };

  const checkIfAllowedToOpen = (inputdate) => {
    const doordate = new Date(inputdate);
    const today = new Date();
    console.log(dayToDate(doordate));
    console.log(dayToDate(today));
    if (dayToDate(today) >= dayToDate(doordate)) {
      openDoor(inputdate);
    } else {
      setMsg({});
      setModalOpen(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("open doors", JSON.stringify(submitToStorage));
  }, [submitToStorage]);

  // Remove the item from localstorage and that way resets the doors.
  const resetDoors = () => {
    setSubmitToStorage([]);
    setMsg({});
    localStorage.removeItem("open doors");
  };

  // Initial fetch of localstorage.
  useEffect(() => {
    const local = localStorage.getItem("open doors");
    setIsOpen(local);
  }, [submitToStorage]);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <Wrapper>
      <main>
        <>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {" "}
            {modalOpen && (
              <Modal modalOpen={modalOpen} handleClose={close} msg={msg} />
            )}
          </AnimatePresence>

          <div className="wrapper">
            <div className="info-container">
              <div className="title">
                <h1>
                  Advent <br /> Calendar
                </h1>
              </div>
              <div className="text">
                <p>
                  This holiday season, we have prepared a surprise for you.
                  Behind each door of our 2024 Advent Calendar, you will
                  discover special gifts and offers from some of your favourite
                  brands that you can claim at our centre. The countdown to
                  December 25th is on. Open the doors below and see what’s
                  inside...
                </p>
              </div>

              <div className="footer"></div>
            </div>
            <div className="calendar-container">
              <div className="container">
                <div className="content">
                  <div className="calendar">
                    {doors.map((door, i) => {
                      return (
                        <div
                          className="door-container"
                          key={i}
                          style={{
                            backgroundImage: `url(${door.img})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <div
                            className={
                              isOpen.includes(door.day) ? "dooropen" : "door"
                            }
                            onClick={() => checkIfAllowedToOpen(door.day)}
                            // onMouseOver={() => {
                            //   if (isOpen.includes(door.day)) {
                            //     setHover(
                            //       `${door.id}:  ${door.discount} discount for ${door.applied} with ${door.code}`
                            //     );
                            //   } else return;
                            // }}
                            // onMouseLeave={() => {
                            //   setHover(``);
                            // }}
                          >
                            {isOpen.includes(door.day) ? (
                              <p>{dayToDate(door.day)}</p>
                            ) : (
                              <p>{dayToDate(door.day)}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* <div className="hover">
                <p>{hover}</p>
                </div> */}
                  <div className="btn-container">
                    <motion.button
                      // whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="resetbutton"
                      onClick={resetDoors}
                    >
                      resetează
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </main>
    </Wrapper>
  );

  // return <div className="haisincer">hai sincer</div>;
}

export default CalendarOne;
