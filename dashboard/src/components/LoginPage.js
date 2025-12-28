const { user, loading, login } = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();

React.useEffect(() => {
  if (!loading && user) navigate("/", { replace: true });
}, [loading, user, navigate]);

if (loading) return <div style={{ padding: 20 }}>Loading...</div>;
