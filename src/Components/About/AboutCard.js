import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view" dir="rtl">
      <Card.Body dir="rtl">
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",fontSize:'23px'}}>
           سلام من علی رضا داوری هستم،رشته کامپیوتر <span className="purple">و برنامه نویس فرانت هستم </span>
            <span className="purple"> تا الان 4 سال شده</span>
            <br />که داخل این حوضه دارم فعالیت میکنم و آموزش میبنیم 
            <br />
            <br />
            پایین تر مهارت هایی که توی این چند سال یاد گرفتم برای برای شما نمایش دادم!
          </p>
          <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
