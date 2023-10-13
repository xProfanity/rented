
export default function Footer() {
  return (
    <footer className="h-auto min-h-screen w-full flex flex-col justify-center items-center mt-2">
        <div className="h-full w-[95%] mx-auto">
            <div className="h-auto w-full flex flex-col justify-center items-center gap-8">
              <p id="contact">Contacts</p>
              <div className="h-20 w-1/2 flex-row flex justify-center items-center"></div>
            </div>

            <div className="w-full flex flex-row justify-center items-center">
                <p className="text-sm text-gray-500">&copy; Gerrardafk 2023. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}
