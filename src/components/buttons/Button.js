import React, { useState } from "react";

export function Button({
  srcIcon,
  buttonText,
  disable,
  customizeStyle,
  onClickDisable,
  onClick,
  textStyle,
  textSize
}) {
  const [isShowOption, setIsShowOption] = useState(false);

  const handleButtonClick = () => {
    if (!disable) {
      onClick?.();
    } else {
      onClickDisable?.()
    }
    setIsShowOption(!isShowOption);
  };


  const classStyles = {
    BUTTON_CONTAINER: `
        ${disable
        ? "bg-light-gray! text-grey-gravel/80! cursor-default"
        : 'active:scale-85 cursor-pointer'}   
            flex justify-center items-center px-4 py-2 rounded-lg transition-all duration-500 ease-in-out min-w-fit gap-2
            ${customizeStyle} `,
    IMAGE: " w-5 h-5 shrink-0",
  }

  return (
    <button
      onClick={handleButtonClick}
      className={classStyles.BUTTON_CONTAINER}
    >
      {srcIcon && (
        React.isValidElement(srcIcon) ?
          srcIcon
          :
          <img src={srcIcon} className={classStyles.IMAGE} alt="icon" />

      )}
      {buttonText && <p
        className={textStyle}
        style={{ fontSize: textSize ?? '16px' }}
      >
        {buttonText}
      </p>}
    </button>
  );
}

export default Button;
