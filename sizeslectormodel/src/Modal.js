import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(1);
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const getImageBySize = () => {
    switch (selectedSize) {
      case "Shop All":
        return "https://png.pngtree.com/png-vector/20220929/ourmid/pngtree-mobile-shopping-concept-a-man-and-woman-buy-things-in-the-png-image_6226592.png";
      case "Child":
        return "https://media.istockphoto.com/id/931577634/photo/soft-focus-of-a-two-years-old-child-choosing-her-own-dresses-from-kids-cloth-rack.jpg?b=1&s=170667a&w=0&k=20&c=fk2S1sXIoZDlsGv3lOm0m88qhMBlo67OtTZpt6eh_jE=";
      case "Mens":
        return "https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-hand-drawn-cartoon-men-wearing-elements-upoutfitpopularappareltrend-png-image_608147.jpg";
      case "Women":
        return "https://png.pngtree.com/png-clipart/20201224/ourmid/pngtree-fashion-womens-clothing-design-elements-trend-models-png-image_2597976.jpg";
      default:
        return "https://png.pngtree.com/png-vector/20220929/ourmid/pngtree-mobile-shopping-concept-a-man-and-woman-buy-things-in-the-png-image_6226592.png";

        //return "https://png.pngtree.com/png-vector/20191127/ourmid/pngtree-16-electronic-devices-icons-for-personal-and-commercial-use-png-image_2027379.jpg";
    }
  };
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div>
          {" "}
          <div className="buttonsContainer">
            <button
              className="categoryButtons"
              onClick={() => handleSizeClick("Shop All")}
            >
              Shop All
            </button>
            <button
              className="categoryButtons"
              onClick={() => handleSizeClick("Child")}
            >
              Child
            </button>
            <button
              className="categoryButtons"
              onClick={() => handleSizeClick("Mens")}
            >
              Mens
            </button>
            <button
              className="categoryButtons"
              onClick={() => handleSizeClick("Women")}
            >
              Women
            </button>
          </div>
          <br />
          {selectedSize && (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              className="brandImage"
              src={getImageBySize()}
              alt={`Image for size ${selectedSize}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
