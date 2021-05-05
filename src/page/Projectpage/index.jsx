import ProjectList from "./Component/ProjectList"

export default function Project() {
    return (
        <main className="projectpage" id="main">
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">dự án</h2>
                    <p className="top-des">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
                        luctus
            </p>
                    <div className="list row">
                        <ProjectList
                            image="img/project/project (1).jpg"
                            project_name="Furnitown"
                            makeby_name="Hoàn thành với Trần Nghĩa"
                        />
                        <ProjectList
                            image="img/project/project (2).jpg"
                            project_name="kymco"
                            makeby_name="Hoàn thành với Huỳnh Tiến Tà"
                        />
                        <ProjectList
                            image="img/project/project (3).jpg"
                            project_name="gboxmb"
                            makeby_name="Hoàn thành bởi Nguyễn Văn Tuấn"
                        />

                        <ProjectList
                            image="img/project/project (4).jpg"
                            project_name="wooder"
                            makeby_name="Hoàn thành bởi Nguyễn Đức Huy"
                        />

                        <ProjectList
                            image="img/project/project (5).jpg"
                            project_name="gboxmb"
                            makeby_name="Hoàn thành bởi Nguyễn Văn Tuấn"
                        />
                        <ProjectList
                            image="img/project/project (6).jpg"
                            project_name="gboxmb"
                            makeby_name="Hoàn thành bởi Nguyễn Đức Huy"
                        />

                        <ProjectList
                            image="img/project/project (2).jpg"
                            project_name="kymco"
                            makeby_name="Hoàn thành với Huỳnh Tiến Tà"
                        />
                        <ProjectList
                            image="img/project/project (3).jpg"
                            project_name="gboxmb"
                            makeby_name="Hoàn thành bởi Nguyễn Văn Tuấn"
                        />

                    </div>
                    <div className="bottom">
                        <div className="btn overlay round btn-more">
                            tải thêm
              </div>
                    </div>
                </div>
            </section>
        </main>
    )
}