import { SET_FEEDBACK_COUNT } from "../../constants/action";

const initialState = {
  adminSidebar: [
    {
      id: 1,
      name: "DASHBOARD",
      url: "/admin/",
      icon: "DashboardIcon"
    },
    {
      id: 2,
      name: "Портфолио",
      url: "/admin/portfolio",
      icon: "WorkIcon"
    },
    {
      id: 3,
      name: "Меню",
      url: "/admin/menu",
      icon: "ListIcon"
    },
    {
      id: 4,
      name: "Услуги",
      url: "/admin/services",
      icon: "AccountBalanceWalletIcon"
    },
    {
      id: 5,
      name: "Обратная связь",
      url: "/admin/feedback",
      icon: "EmailIcon"
    }
  ],
  feedback: [],
  feedbackCount: ""
};

const dashboardReducer = (state = initialState, action) => {
  if (action.type === SET_FEEDBACK_COUNT) {
    return { ...state, feedback: action.data };
  } else {
    return state;
  }
};
export default dashboardReducer;
