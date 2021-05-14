import React from "react";
import { CourselItem } from "../../component";

// import { CourseItem } from "../../../component"


export default function CourserList() {
    return (
        <>
            <section className="section-courseoffline">
                <div className="container">
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
                        </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
                    </div>
                    <div className="list row">
                        <CourselItem
                            name="Reactjs + Redux"
                            description="Nếu bạn đã có kiến thức cơ bản về lập trình website responsive hoặc đã học qua khóa CFD Căn Bản"
                            image="img/img1.png"
                            teacher_name="Đặng Thuyền Vương"
                            teacher_avatar="img/avt.png"
                            status="da-ket-thuc"
                        />
                        <CourselItem
                            name="Web Reponsive"
                            description="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Reponsive với Media Query, Bootstrap 4, Grunt, Javascript, JQuery"
                            image="img/img2.png"
                            teacher_name="Trần Nghĩa"
                            teacher_avatar="img/avt.png"
                            status="dang-dien-ra"
                        />
                        <CourselItem
                            name="Frontend Newbie"
                            description="Khóa học dành cho người mới gồm Photoshop, HTML, CSS, CSS3, FLex box, Grid, Javascript căn bản, hoàn thành một dự án website tĩnh"
                            image="img/img3.png"
                            teacher_name="Trần Nghĩa"
                            teacher_avatar="img/avt.png"
                            status="sap-dien-ra"
                        />
                        <CourselItem
                            name="Reactjs + Redux"
                            description="Nếu bạn đã có kiến thức cơ bản về lập trình website responsive hoặc đã học qua khóa CFD Căn Bản"
                            image="img/img4.png"
                            teacher_name="Đặng Thuyền Vương"
                            teacher_avatar="img/avt.png"
                            status="da-ket-thuc"
                        />
                        <CourselItem
                            name="Web Reponsive"
                            description="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Reponsive với Media Query, Bootstrap 4, Grunt, Javascript, JQuery"
                            image="img/img5.png"
                            teacher_name="Trần Nghĩa"
                            teacher_avatar="img/avt.png"
                            status="dang-dien-ra"
                        />
                        <CourselItem
                            name="Frontend Newbie"
                            description="Khóa học dành cho người mới gồm Photoshop, HTML, CSS, CSS3, FLex box, Grid, Javascript căn bản, hoàn thành một dự án website tĩnh"
                            image="img/img6.png"
                            teacher_name="Trần Nghĩa"
                            teacher_avatar="img/avt.png"
                            status="sap-dien-ra"
                        />
                    </div>
                </div>
            </section>
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
                    </div>
                    <div className="list row">
                        <CourselItem
                            name="Reactjs + Redux"
                            description="Nếu bạn đã có kiến thức cơ bản về lập trình website responsive hoặc đã học qua khóa CFD Căn Bản"
                            image="img/img1.png"
                            teacher_name="Đặng Thuyền Vương"
                            teacher_avatar="img/avt.png"
                            status="da-ket-thuc"
                        />
                        <CourselItem
                            name="Web Reponsive"
                            description="Khóa học thực chiến dự án gồm Photoshop, HTML, CSS, CSS3, SCSS, Reponsive với Media Query, Bootstrap 4, Grunt, Javascript, JQuery"
                            image="img/img5.png"
                            teacher_name="Trần Nghĩa"
                            teacher_avatar="img/avt.png"
                            status="dang-dien-ra"
                        />
                        <CourselItem
                            name="Frontend Newbie"
                            description="Khóa học dành cho người mới gồm Photoshop, HTML, CSS, CSS3, FLex box, Grid, Javascript căn bản, hoàn thành một dự án website tĩnh"
                            image="img/img6.png"
                            teacher_name="Trần Nghĩa"
                            teacher_avatar="img/avt.png"
                            status="sap-dien-ra"
                        />
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </>
    )
}