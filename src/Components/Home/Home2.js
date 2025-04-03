import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               حدف از ساخت<span className="purple"> این وبلاگ  </span>  چیست؟
            </h1>
            <p className="home-about-body" style={{textAlign:'right'}}>
                  .این وبلاگ برای گیت هاب ساخته شده و هدف آن معرفی خودم و زبان‌های برنامه‌نویسی که بلد هستم و راه‌های ارتباط شما با من است
                  <br />
                  گیت هاب یک پلتفرم توسعه نرم‌افزار مبتنی بر وب است که برای
                  <i>
                    <b className="purple"> مدیریت نسخه‌ها و همکاری تیمی </b>
                  </i>
                  در پروژه‌های برنامه‌نویسی استفاده می‌شود.
                  <br />
                  از طریق گیت هاب، توسعه‌دهندگان می‌توانند کدهای خود را با دیگران به اشتراک بگذارند، 
                  تغییرات را دنبال کنند و با استفاده از
                  <b className="purple"> گیت </b> 
                  و
                  <i>
                    <b className="purple"> مخازن عمومی و خصوصی </b>
                  </i>
                  .پروژه‌های خود را سازمان‌دهی کنند
                </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{borderRadius:'51%',width:'65%'}}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              باخیال راحت با من <span className="purple"> ارتباط  </span>برقرار کیند
            </h1>
            <div className="contact">
              <div>
                <PhoneIcon
                  color="secondary"
                  className="con_ico"
                  sx={{ fontSize: 45 }}
                />
                <a href="tel:+98 09926872311" className="con-det">
                  +98 09926872311
                </a>
              </div>
              <div>
                <EmailIcon
                  className="con_ico"
                  color="secondary"
                  sx={{ fontSize: 45 }}
                />
                <a
                  href="mailto:alireza.davari1425@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="con-det"
                >
                  alireza.davari1425@gmail.com
                </a>
              </div>
              <div>
                <PlaceIcon
                  color="secondary"
                  className="con_ico"
                  sx={{ fontSize: 45 }}
                />
                <p className="con-det">هنرستان،کوچه11</p>
              </div>
            </div>
            <h1>شبکه های اجتماعی</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/alirezadavari1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alireza-davari-b0b149239/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/harshmehta._/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
