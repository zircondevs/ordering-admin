import toastr from "toastr";

toastr.options = {
	"closeButton": true,
	"debug": false,
	"newestOnTop": true,
	"progressBar": true,
	"positionClass": "toast-top-right",
	"preventDuplicates": true,
	"onclick": () => true,
	"showDuration": 300,
	"hideDuration": 1000,
	"timeOut": 5000,
	"extendedTimeOut": 500,
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
};

type Types = "success" | "info" | "error" | "warning" | "";


export const ToastMessage = (header: string, message: string) => {
	let type: Types  = "";

	switch (header) {
	case "SUCCESS":
		type = "success";
		break;

	case "INFO":
		type = "info";
		break;

	case "ERROR":
		type = "error";
		break;

	case "WARN":
		type = "warning";
		break;

	default:
		type = "info";
		break;
	}

	toastr[type](message);
};

export const type = {
	SUCCESS: "SUCCESS",
	INFO: "INFO",
	ERROR: "ERROR",
	WARN: "WARN"
};