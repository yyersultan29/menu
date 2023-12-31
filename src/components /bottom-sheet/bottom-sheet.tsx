
import { useRef, FC, useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode
}

const BottomSheet: FC<BottomSheetProps> = ({ open, onClose, children }) => {

  const bottomSheetRef = useRef(null);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClose();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(bottomSheetRef);

  return (
    <>

      <motion.div
        animate={
          open ? { opacity: 0.6, zIndex: 10 } : { opacity: 0, display: "none" }
        }
        initial={{ opacity: 0 }}
        className="fixed top-0 bottom-0 right-0 left-0 h-full w-screen bg-black"
      />
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { y: 0, height: "auto" },
              collapsed: { y: "100%", height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={`
            fixed bottom-0 right-0 left-0 
            z-10 w-full  rounded-t-3xl border-2 
            border-b-0 border-gray-50 bg-white 
            shadow-[0px_-8px_20px_-6px_rgba(0,0,0,0.3)]`}
          >
            <div ref={bottomSheetRef} className="h-[600px] p-4">
              <div className="mb-2 flex justify-end">
                <CloseIcon className="w-10 h-10 p-2 cursor-pointer hover:bg-gray-100 rounded-full " onClick={onClose} />
              </div>
              <div className="flex flex-col space-y-3">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomSheet;
