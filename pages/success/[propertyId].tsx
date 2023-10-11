
export default function Success() {
  return (
    <div>Success</div>
  )
}

type ParamProps = {
  params: {
    propertyId: string;
  }
}

export async function getStaticProps({params: {propertyId}}: ParamProps) {
}