import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import { BsChevronDown } from "react-icons/bs";

function Egzersiz(props) {
    const { title, text, } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="egzersizContainer">
            <Card className="bg-dark text-white">
                <Card.Title style={{ cursor: "pointer" }} onClick={handleToggle}>
                    {title}{" "}
                    <BsChevronDown
                        style={{
                            float: "right",
                            transition: "transform 0.3s",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                        onClick={handleToggle}
                    />
                </Card.Title>
                {isOpen && <Card.Text>{text}</Card.Text>}
            </Card>
        </div>
    );
}

export default Egzersiz;
