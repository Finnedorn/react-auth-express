import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useLocation } from "react-router-dom";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

const PostShow = () => {
  // uso L'hook useParams per estrapolarmi lo slug della single page del post che ho cliccato 
  const { slug } = useParams();
  // tengo memoria dello state della pagina in caso volessi implementare in futuro
  // dinamiche di scorrimento tra le varia single pages tramite pulsanti "+" e "-"
  const location = useLocation();
  // ho un valore di state per questo post ? altrimenti ha valore null
  // questo mi servirà quando abiliterò lo scorrimento delle single pages
  const initialPost = location.state?.post || null;
  // ho un valore per di post di tipo slug ? altrimenti ha valore dello slug portato con useParams
  const initialSlug = initialPost?.slug || slug; 
  
  const [post, setPost] = useState(initialPost);
  // setto un hook per attivare un loader nel mentre che carico gli elementi a schermo 
  const [loading, setLoading] = useState(true);

  // effettuo la chiamata per la single page
  const fetchSinglePost = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${apiUrl}/posts/${initialSlug}`);
      setPost(response.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      return <div>Errore durante il caricamento della pagina: {error}</div>;
    } finally {
      // in ogni caso setto il loader a false così da disporre o l'errore o il risultato della chiamata 
      setLoading(false);
    }
  };

  // al cambiamento del valore di initialSlug 
  // (es: scorro tra le pagine o ricarico la pagina con un params differente)
  // effettuo la chiamata solo se non ho già valori per post 
  useEffect(() => {
    if (!post) {
      fetchSinglePost();
    } else {
      setLoading(false);
    }
  }, [initialSlug]);
  

  if (loading) {
    return <div>Carico il post...</div>;
  }
 

  if(!post) {
    return <div>Post non trovato o non più presente.</div>
  }

  return (
    <div className="container">
      <div className=" bg-light d-flex justify-content-center rounded-3 overflow-hidden my-5">
        <div
          style={{
            overflow: "hidden",
          }}
        >
          {post.image ? (
            <img src={post.image} alt={`Image of ${post.title}`} />
          ) : (
            <img
              src="https://placehold.co/600x400"
              alt={`Image of ${post.title}`}
            />
          )}
        </div>
        <div className=" d-flex justify-content-center w-75">
          <div className="p-5">
            <div>
              <h2
                style={{
                  marginBottom: "10px",
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  fontSize: "1.3rem",
                  padding: "10px 0px",
                }}
              >
                {post.content}
              </p>
            </div>
            <div>
              <div className="mb-3">
                <span className="badge text-bg-primary fs-5 me-2 text-light">
                  {post.category.name}
                </span>
              </div>
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`tag text-bg-secondary badge fs-5 me-2 text-light`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          <div className="pt-5">
            <Link to="../" relative="path">
              <button className="btn btn-success me-2">Torna alla Pagina Precedente</button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostShow;
