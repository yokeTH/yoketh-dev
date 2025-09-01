interface Props {
  children: React.ReactNode;
}

export default function SectionWrapper({ children }: Props) {
  return <div className='h-dvh w-screen flex-shrink-0 p-16'>{children}</div>;
}
