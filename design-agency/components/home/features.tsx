'use client'



export function FeaturesSection() {
    return (

        <div className="relative w-full">
            <div className="relative w-full border border-dashed h-full rounded-full"> 
                <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="border-b border-dashed py-10 md:border-r lg:border-b-0 lg:border-r">
                        <p className="text-center text-md">48 Hours Delivery</p>
                    </div>
                    <div className="border-b py-10 border-dashed lg:border-b-0 lg:border-r">
                        <p className="text-center text-md">Access to Design Portal</p>
                    </div>
                    <div className="border-b py-10 border-dashed md:border-r lg:border-b-0 lg:border-r">
                        <p className="text-center text-md">Top-notch quality</p>
                    </div>
                    <div className="py-10">
                        <p className="text-center text-md">Unlimited Design Requests</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
