import notFound from "../../assets/images/404.jpg"

export const pageNotFound = () => {
    return(
        <div>
            <img src={notFound} alt="" />
        </div>
    )
}