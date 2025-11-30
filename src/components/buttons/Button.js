import React, { useState } from "react";

export function Button({
  srcIcon,
  buttonText,
  disable,
  customizeStyle,
  onClickDisable,
  onClick,
  textStyle
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
            flex justify-center items-center rounded-lg transition-all duration-500 ease-in-out min-w-fit gap-2
            px-2 py-1 text-[10px] lg:px-4 lg:py-2 lg:text-base
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
      >
        {buttonText}
      </p>}
    </button>
  );
}

export default Button;
