import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { RiAlarmWarningFill } from "react-icons/ri";
import CustomButton from "../../ui/button/customButton";

export default function Portal() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<any>(document.getElementById("portal-root"));

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <RiAlarmWarningFill
          size={30}
          className="animate-bounce-slow hover:animate-spin"
        />
      </button>
      {showModal &&
        createPortal(
          <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/25 text-black backdrop-blur-md  flex flex-col justify-center items-center">
            <div className="w-1/3 h-fit border border-spacing-1 bg-slate-500/40 shadow-2xl rounded-2xl flex flex-col p-7 justify-between items-center">
              <div className="mb-5 flex flex-col justify-center items-center">
                <p>Добрый день</p>
                <p className="mb-4 text-center">
                  Меня зовут Алексей, frontend debeloper
                </p>
                <p className="font-medium">Используемый стек:</p>
                <ol className="mb-4 text-center">
                  <li>React</li>
                  <li>RTQ</li>
                  <li>Typescript</li>
                  <li>Tailwind</li>
                </ol>
                <p className="font-medium">Contacts:</p>
                <ul>
                  <li className="flex flex-col text-center mb-4">
                    <a href="https://t.me/volter_2109" target="_blank">
                      https://t.me/volter_2109
                    </a>
                    <a href="tel:+79111545758">+7(911)154-57-58</a>
                  </li>
                  <li className="text-center">
                    <p className="font-medium">GitHub</p>
                    <a href="https://github.com/voLter-2109" target="_blank">
                      https://github.com/voLter-2109
                    </a>
                  </li>
                </ul>
              </div>
              <CustomButton
                className="px-16 py-1"
                onClick={() => setShowModal(false)}
              >
                Close
              </CustomButton>
            </div>
          </div>,
          modalRef.current
        )}
    </>
  );
}
