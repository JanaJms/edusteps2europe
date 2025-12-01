import React from 'react'

export default function FlipCard({ FrontCard, BackCard }) {
    return (
        <div className="group h-[160px] w-[240px] md:w-[300px] md:h-[210px] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* <!-- Front --> */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                    <FrontCard.Component {...FrontCard.props} />
                </div>

                {/* <!-- Back --> */}
                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <BackCard.Component {...BackCard.props} />
                </div>

            </div>
        </div>

    )
}
