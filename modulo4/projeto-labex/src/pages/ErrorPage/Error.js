import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate()
  const ToBack = ()=>{
    navigate(-1)
  };

  return (
    <div>
      <p>Error Page</p>
      <button onClick={()=>ToBack()}>Voltar</button>
    </div>
  );
}
