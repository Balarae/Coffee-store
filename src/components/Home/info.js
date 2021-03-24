import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'

export default function info() {
    return (
        <section className="py-5" >
        <div className="container">
        <Title title="Our story"  />
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-center ">
                    <p className="lead text-muted mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugiat vel modi tempore suscipit unde numquam nesciunt, est, saepe ad quaerat sapiente commodi! Voluptatum sint, assumenda porro atque quae voluptatem cumque! Doloremque doloribus commodi dolores perspiciatis aut atque vitae ratione nesciunt rem totam beatae vel necessitatibus deleniti nisi, minus neque, optio libero illo omnis velit error tempora. Doloribus corrupti quidem quos natus saepe enim a aliquam adipisci at temporibus cumque laboriosam maiores tenetur obcaecati magnam repudiandae eos dicta, dignissimos amet incidunt reprehenderit neque et sequi! Velit nulla nisi voluptate quam placeat, pariatur magnam cupiditate excepturi officiis molestiae magni dolores dicta.
                    </p>
                    <Link to="/about">
                        <button className="btn text-uppercase btn-yellow" >about page</button>
                    </Link>
                </div>
            </div>
        </div>

        </section>
    )
}
