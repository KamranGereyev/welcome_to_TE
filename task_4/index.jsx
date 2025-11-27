import { useState } from 'react';

// Базовый переиспользуемый блок
const BaseBlock = ({ mouseEnterCallback, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    if (!isActive) {
      setActive(true);
    }
    mouseEnterCallback && mouseEnterCallback();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? 'active' : ''}>
      {children}
    </div>
  );
};

// Обёртка для сохранения исходного API (mouseEnterCallbak, а не mouseEnterCallback)
export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  return (
    <BaseBlock mouseEnterCallback={mouseEnterCallbak}>
      <img src={imgSrc} alt={imgAlt} />
    </BaseBlock>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  return (
    <BaseBlock mouseEnterCallback={mouseEnterCallbak}>
      <p>{content}</p>
    </BaseBlock>
  );
};

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  return (
    <BaseBlock mouseEnterCallback={mouseEnterCallbak}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </BaseBlock>
  );
};
