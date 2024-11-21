import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { BsX } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import Wrapper from "../assets/wrappers/Modal";

const dropIn = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text, msg }) => {
  return (
    <Wrapper>
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal orange-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {msg.code ? (
            <>
              <h2 className="hurray">🎉🎉🎉 &nbsp; URAA! &nbsp; 🎉🎉🎉</h2>
              <p className="modal-text">
                Astăzi primești {msg.discount}% reducere la {msg.applied} cu
                codul
                <b> {msg.code}</b>{" "}
              </p>{" "}
              <p className="modal-subtext">
                Întoarce-te mâine și descoperă noua ofertă! 🎁
              </p>
            </>
          ) : (
            <h2 className="hurray">Mai așteaptă puțin!</h2>
          )}

          <motion.button
            className="close-btn"
            onClick={handleClose}
            whileHover={{ scale: 1.15 }}
          >
            <BsX />
          </motion.button>
        </motion.div>
        <motion.div
          className={msg ? "product-links" : "product-links hidden"}
          variants={dropIn}
          initial="hidden"
          animate={msg.code ? "visible" : "hidden"}
          exit="exit"
        >
          {" "}
          <a className="link" href={msg.url} target="_blank">
            vezi produsele <GoArrowUpRight className="link-arrow" size={17} />
          </a>
        </motion.div>
      </Backdrop>
    </Wrapper>
  );
};

export default Modal;
