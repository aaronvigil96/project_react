const Project = ({props, align}) => {

    const {img, title} = props;

    return(
        <div className={`mt-5 max-w-screen-lg mx-auto flex p-2 gap-2 ${align === "right" ? "justify-end" : "justify-start"}`}>
          <div className="max-w-64">
            <img src={img} className="object-cover h-full w-full rounded-lg"/>
          </div>
          <div className="w-52">
              <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        </div>
    )
}

export default Project;