import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import tictac from "../../Assets/Projects/TIC-TAC-TOE.png";
import Smatbot from "../../Assets/Projects/Smatbot.png";
import todo from "../../Assets/Projects/todo_.png";
import Booking from "../../Assets/Projects/Booking.png";
function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					پروژه هایی که  <strong className="purple">تازگی  </strong> انجام دادم
				</h1>
				<p style={{ color: "white" }}>در اینجا سه تا از اخرین پروژه هایی که تموم کردن رو قرار دادم				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={tictac}
							isBlog={false}
							title="TIC TAC TOE"
							description="A simple game where two players can play TIC TAC TOE & get the winner or draw."
							techstack="HTML | CSS | JS"
							link="https://alirezadavari1.github.io/QuickLearn/Home.html"
							git="https://github.com/alirezadavari1/QuickLearn?tab=readme-ov-file"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Smatbot}
							isBlog={false}
							title="Clone of Smatbot.com"
							description="Smatbot provides a facility to create a chatbot for all business needs."
							techstack="HTML | CSS | JS"
							link="https://github.com/alirezadavari1/Blog-react"
							git="https://github.com/alirezadavari1/Blog-react"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={todo}
							isBlog={false}
							title="Todo App"
							description="A todo app where users can add tasks, mark it as done, view completed tasks, change the status of tasks & delete the tasks."
							techstack="HTML | CSS | JS | React"
							link="https://github.com/alirezadavari1/blog"
							git="https://github.com/alirezadavari1/blog"
						/>
					</Col>

				
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
