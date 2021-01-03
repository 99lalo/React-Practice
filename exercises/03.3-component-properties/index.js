import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

export const BootstrapCard = props => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	imageUrl: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string
	// 2) add here the new properties into the proptypes object
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(
	<BootstrapCard
		title={"Paul McCartney"}
		imageUrl={
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/220px-Paul_McCartney_in_October_2018.jpg"
		}
		description={
			"James Paul McCartney (Liverpool, Merseyside; 18 de junio de 1942) es un cantautor, compositor, músico, multiinstrumentista, escritor y actor británico. Junto a John Lennon, George Harrison y Ringo Starr, ganó fama mundial por ser el bajista y uno de los cantantes de la banda de rock The Beatles"
		}
		buttonUrl={"https://es.wikipedia.org/wiki/Paul_McCartney"}
		buttonLabel={"Take me to wikipedia"}
	/>,
	document.querySelector("#myDiv")
);

const paul = {
	title: "Paul McCartney",
	imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/220px-Paul_McCartney_in_October_2018.jpg",
	description:
		"James Paul McCartney (Liverpool, Merseyside; 18 de junio de 1942) es un cantautor, compositor, músico, multiinstrumentista, escritor y actor británico. Junto a John Lennon, George Harrison y Ringo Starr, ganó fama mundial por ser el bajista y uno de los cantantes de la banda de rock The Beatles",
	buttonUrl: "https://es.wikipedia.org/wiki/Paul_McCartney",
	buttonLabel: "Take me to wikipedia"
};
