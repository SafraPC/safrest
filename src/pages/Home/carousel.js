import React from "react";
import "./styles.css";

import ambient from "../../assets/ambient.jpg";
import beauty from "../../assets/beauty.jpg";
import peopleUsing from "../../assets/peopleUsing.jpg";
import { Carousel } from "react-bootstrap";

function HomeCarousel() {
	return (
		<Carousel style={{ maxHeight: "650px",height:"100%" }}>
			<Carousel.Item interval={2500}>
				<img className="d-block" src={ambient} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item interval={2500}>
				<img className="d-block" src={beauty} alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item interval={2500}>
				<img className="d-block " src={peopleUsing} alt="Third slide" />
			</Carousel.Item>
		</Carousel>
	);
}

export default HomeCarousel;
