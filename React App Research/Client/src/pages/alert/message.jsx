import Swal from "sweetalert2";

const AlertMsg = ( booSucess, atype, msg ) => {
    return Swal.fire({
        icon: booSucess ,
        type:atype,
        title: msg
    });
}

export default AlertMsg;