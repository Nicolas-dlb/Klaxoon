import React, { useEffect } from "react";
import { BadRequestModalProps } from "../../utils/types/types";
import "./BadRequestModal.css";

function BadRequestModal({
  badRequest,
  setBadRequest,
}: BadRequestModalProps): JSX.Element {
  useEffect(() => {
    const badRequestTimer = setTimeout(() => setBadRequest(false), 4000);
    return () => clearTimeout(badRequestTimer);
  }, [badRequest]);

  return (
    <div
      tabIndex={-1}
      onClick={() => setBadRequest(false)}
      onKeyPress={(key) => key.key === "Enter" && setBadRequest(false)}
      role="button"
      className="badRequestModal"
    >
      <div className="modal">
        <p>
          On accepte que les liens Vimeo et Flickr. Désolé c&apos;est les
          consignes 😅
        </p>
      </div>
    </div>
  );
}

export default BadRequestModal;
