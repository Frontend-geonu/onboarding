interface IBaseLayout {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: IBaseLayout) => {
  return <>{children}</>;
};
export default BaseLayout;
