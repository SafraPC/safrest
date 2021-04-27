import React from "react";
import "./styles.css";

import ambient from "../../assets/ambient.jpg";
import beauty from "../../assets/beauty.jpg";
import peopleUsing from "../../assets/peopleUsing.jpg";
import { Carousel } from "react-bootstrap";

function HomeCarousel() {
	return (
		<Carousel style={{ height: "650px" }}>
			<Carousel.Item interval={2500}>
				<img className="d-block" src={ambient} alt="First slide" />
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={2500}>
				<img className="d-block" src={beauty} alt="Second slide" />
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={2500}>
				<img className="d-block " src={peopleUsing} alt="Third slide" />
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default HomeCarousel;
