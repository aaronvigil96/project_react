import Project from "./Project";

const Projects = () => {

    const projects = [
        {
            id: 1,
            img: "img/botella.png",
            title: "Botella lisa",
            description: "Este es un prototipo de una botella térmica en 3d la cual se realizó a modo de práctica con Blender.A la misma, le falta la tapa de cierre y más detalles. La image está hecha apartir de ese objeto 3D."
        },
        {
            id: 2,
            img: "img/chancho.png",
            title: "Chancho",
            description: "Chancho alcancía hecho en blender."
        },
        {
            id: 3,
            img: "img/cuchilla.png",
            title: "Cuchilla desmalezadora",
            description: "Cuchilla de desmalezadora de 3 puntos"
        },
        {
            id: 4,
            img: "img/silla.png",
            title: "Silla",
            description: "Estilo low polly"
        },
        {
            id: 5,
            img: "img/mesa.png",
            title: "Mesa",
            description: "Estilo low polly"
        },
        {
            id: 6,
            img: "img/mesa_y_silla.png",
            title: "Mesa y sillas",
            description: "Integración de dos modelos distintos"
        }
    ]

    return(
        <section>
            <div className="text-center mb-2">
              <h2 className="text-3xl font-black mt-4">Imagenes 3D</h2>
              <h3>Diseños 3D realiazado con blender</h3>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-2`}>
                {
                    projects?.map((project, index) => (
                    <div key={index}>
                        <img src={project.img} className="w-full object-cover"/>
                    </div>
                ))
                }
            </div>
        </section>
    )
}

export default Projects;