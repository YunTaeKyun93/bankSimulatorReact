const useLogic = ({isOpen, onRequsetClose})=>{
   const submit=()=>{
    if(!isOpen) return;
    onRequsetClose();
   }
   return {
    submit
   }
}
export default useLogic;