interface IBaseLayout {
  children: React.ReactNode;
}

const BaseLayout: React.FC<IBaseLayout> = ({ children }: IBaseLayout) => {
  return <>{children}</>;
};
export default BaseLayout;
