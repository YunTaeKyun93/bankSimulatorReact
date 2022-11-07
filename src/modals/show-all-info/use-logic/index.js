const useLogic = ({isOpen, onRequestClose})=>{
   const submit=()=>{
    if(!isOpen) return;
    onRequestClose();
   }
   return {
    submit
   }
}
export default useLogic;