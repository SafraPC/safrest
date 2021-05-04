import React from "react";
import { Apresentation, Page, ScreenView, TForm } from "../../styles/default";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import i18n from "../../services/i18next";
import workImage from "../../assets/svgs/interview.svg";
import MyForm from "../../components/Form";

const WorkWithUs = () => {
	return (
		<Page>
			<Header />
			<ScreenView>
				<Apresentation>
					<label>{i18n.t("pageWWU.header.welcome.text")}</label>
					<hr></hr>
					<span>{i18n.t("pageWWU.header.welcome.subtext")}</span>
				</Apresentation>
				<TForm>
					<div>
						<label>{i18n.t("pageWWU.image.text")}</label>
						<img src={workImage} alt="CardMage" />
					</div>
					<MyForm />
				</TForm>
			</ScreenView>
			<Footer />
		</Page>
	);
};

export default WorkWithUs;
