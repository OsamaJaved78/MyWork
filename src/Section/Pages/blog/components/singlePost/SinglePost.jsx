import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.unsplash.com/photo-1421977870504-378093748ae6?ixid=MnwyMzg4Mzl8MHwxfHNlYXJjaHwxMHx8YnVzfGVufDB8fHx8MTYyMzQyOTMxOQ&ixlib=rb-1.2.1"
          alt=""
        />
        <h1 className="singlePostTitle">
          Faisal Mover's
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/blog">
                Back
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        The National Highways and Motorway Police (NHMP) has suspended ‘Faisal Movers Bus Service’ on Motorway M-2 with immediate effect due after two recent accidents which occurred as a result of negligence of the company’s owner and resulted it loss of human lives.
         Iste
         According to the notification issued by the National Highways and Motorway Police (NHMP), there were two accidents which resulted within 10 days of each other due to “carelessness of bus driver as well as its owner due to deployment of such negligent / careless driver on a public service vehicle.”

The owner of Faisal Movers Bus Service was issue a warning after the first accident, however, the continued negligence of the company resulted in a second accident on 4th July 2021, which resulted in the death of 2 passengers while 6 others were injured.

As a result, the Faisal Movers Bus Service has been suspended on Motorway M-2 with immediate effect after approval from the Deputy Inspector General of Police (Motorway Zone) and the NHMP.
          <br />
          <br />
          The National Highways and Motorway Police (NHMP) has suspended ‘Faisal Movers Bus Service’ on Motorway M-2 with immediate effect due after two recent accidents which occurred as a result of negligence of the company’s owner and resulted it loss of human lives.
         Iste
         According to the notification issued by the National Highways and Motorway Police (NHMP), there were two accidents which resulted within 10 days of each other due to “carelessness of bus driver as well as its owner due to deployment of such negligent / careless driver on a public service vehicle.”

The owner of Faisal Movers Bus Service was issue a warning after the first accident, however, the continued negligence of the company resulted in a second accident on 4th July 2021, which resulted in the death of 2 passengers while 6 others were injured.

As a result, the Faisal Movers Bus Service has been suspended on Motorway M-2 with immediate effect after approval from the Deputy Inspector General of Police (Motorway Zone) and the NHMP.
        </p>
      </div>
    </div>
  );
}
