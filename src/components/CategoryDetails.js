import { MDBRow } from "mdb-react-ui-kit"

export default function CategoryDetails({ name, description }) {
    return (
        <MDBRow className="ms-5">
            <h1>{name}</h1>

            <p>{description}</p>

            <hr className="hr hr-blurry" />
        </MDBRow>
    );
};
