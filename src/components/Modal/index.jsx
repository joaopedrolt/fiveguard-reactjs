import { AnimatePresence, motion } from "framer-motion";
import styles from "./Modal.module.scss";
import Pricing from "./Pricing";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0, translateX: "-50%", translateY: "-50%" },
  visible: { opacity: 1, scale: 1, translateX: "-50%", translateY: "-50%" },
  exit: { opacity: 0 },
};

function Modal({ showModal, setShowModal, product }) {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showModal && (
          <>
            <motion.div
              className={styles.backdrop}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              onClick={closeModal}
              exit="hidden"
            ></motion.div>

            <motion.div
              className={styles.modal}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              exit="exit"
            >
              <Pricing product={product} setShowModal={setShowModal} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Modal;
