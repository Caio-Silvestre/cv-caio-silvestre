import HeaderRight from "./HeaderRight";
import Logo from "./Logo";
import Menu from "./Menu";
import CanvasMenu from "./CanvasMenu";
import { useRouter } from "next/router";

export default function Header({ headerClass }) {
  const router = useRouter();
  return (
    <>
      <header id="header" className={`site-header ${headerClass}`}>
        {/* <CanvasMenu /> */}
        <div className="container-fluid">
          <div className="row flex-align-c inner">
            <div className="col-lg-3 col-6">
              <div className="header-left flex flex-align-c">
                <h3
                  onClick={() => router.push("/")}
                  style={{ cursor: "pointer" }}
                  className="ml-10 w-100"
                >
                  caioSilvestre<i class="las la-registered"></i>
                </h3>
              </div>
            </div>
            <div className="col-lg-6 col-0 text-center">
              <div className="header-center">{/* <Menu /> */}</div>
            </div>
            <div className="col-lg-3 col-6">
              <HeaderRight />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
