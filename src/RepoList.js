import React from "react";
import { useState ,useReducer} from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";



const initial = {
  data: [],
  loading: true,
  error: "",
};
const userDetails = {
  currentPage: 1,
  imgUrl: "",
  emailAddress: "",
  name: "",
  phone: "",
  dob:'',
  age:''
};

const pageReducer = (state, action) => {
  if (action.type === "setCurrentPage") {
    return {
      currentPage: action.payload,
      imgUrl: action.payload2,
      emailAddress: action.payload3,
      name: action.name,
      phone: action.phone,
      dob:action.dob,
      age:action.age
    };
  }
  else
    return state
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch-success":
      return {
        data: action.payload,
        loading: false,
        error: "",
      };
    case "fetch-failed":
      return {
        data: [],
        loading: false,
        error: "something went wrong",
      };
    default:
      return state;
  }
};




export default function RepoList() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
    const [states, dispatch] = useReducer(reducer, initial);
    const [currentPage, currentPageDispatch] = useReducer(pageReducer, userDetails
     );

     useEffect(() => {
  
      let url = 'https://api.github.com/users/kperusi';
  
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
        
          setData(data);
        })
        .finally(() => {
          // SetLoading(false);
        });
    }, []);
  
   
  
    useEffect(() => {
      let url ="https://api.github.com/users/kperusi/repos"
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // let { results } = data;
  
          dispatch({ type: "fetch-success", payload: data});
        })
        .catch((error) => {
          dispatch({ type: "fetch-failed" });
        });
    }, []);
    const getDetails = (eachPerson) => {
      currentPageDispatch({
        type: "setCurrentPage",
        payload2: eachPerson.picture.large,
        payload: currentPage.currentPage,
        payload3: eachPerson.email,
        name: eachPerson.name.first + " " + " " + eachPerson.name.last,
        phone: eachPerson.cell,
        dob:eachPerson.dob.date,
        age:eachPerson.dob.age
      });
    };
    
    let dataPerPage = 5;
    let NumberOfPages = Math.ceil(states.data.length / dataPerPage);
  
    let lastIndex = currentPage.currentPage * dataPerPage;
    let startIndex = lastIndex - dataPerPage;

  console.log(data)
    let listName = states.data
      .slice(startIndex, lastIndex)
      .map((eachRepo, i) => (
        <div
        key={i}
        className="list-item"
        onClick={() => {
          navigate(`repoList/${eachRepo.name}`);
         
        }}
      >
        <div className="branch-container">
        <h5 className="repo-visible">{eachRepo.visibility}</h5>
        <h5 className="repo-branch">{eachRepo.default_branch}</h5>
        </div>
       
        <h2 className="repo-name"> {eachRepo.name} </h2>
        <p className="para">last Update:{eachRepo.updated_at}</p>
       
      </div>
      ));


  if (states.loading) {
    return (
      <div>
       <h1 className="loading">Loading:Please wait</h1>
        <div className="loader"></div>
        
      </div>
    );
  }
  if (states.error) {
    return (
      <div>
        <h1>{states.error}</h1>
      </div>
    );
  }
  return (
    <div className="repolist-container">
      <div className="list-item-wrap">
      <div className="repolist-container-bottom">
        <div className="owner-info-wrap">
          <h1 className="owner-name">
            {data.name} Repository
          </h1>
          <h3>{data.public_repos} public repository</h3>
          <p>Click to get details</p>
        </div>
        <div className="circle">
           <img src={data.avatar_url} alt="owner avatar" className="avatar" />    
        </div>
      </div>
        <ul className="list-item-container">{listName}</ul>
        <div className="page-btns-container">
          {Array.from({ length: NumberOfPages }, (_, index) => index + 1).map(
            (index) => {
              return (
                <div className="page-btn-wrap">
                   <button
                  className={`page-btns ${currentPage.currentPage === index? 'active-btns':null}`}
                  key={index}
                  onClick={() => {
                    currentPageDispatch({
                
                      type: "setCurrentPage",
                      payload: index,
                      name:currentPage.name,
                      payload2:currentPage.imgUrl,
                      payload3: currentPage.emailAddress,
                      // phone: currentPage.phone,
                      // dob:currentPage.dob,
                      // age:currentPage.age
                    });
                  }}
                >
                  {index}
                </button>
                </div>
                
              );
            }
          )}
               
        </div>
        <p className="page-indicator">
                 Page {currentPage.currentPage} of {NumberOfPages}
               </p>
      </div>
      
      <Outlet />
    </div>
  );
}
