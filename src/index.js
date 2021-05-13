import { run } from "./app/app";
import "./styles/main.scss";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";

import $ from "jquery";
import "slick-carousel";

const alertService = new AlertService();
const componentService = new ComponentService();

console.log("hi");
console.log("hello");

$(".your-class").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

run(alertService, componentService);
