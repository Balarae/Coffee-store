import React from 'react'
import Title from '../Globals/Title'

export default function Contact() {
    return (
        <section  className="contact py-5">
            <Title  title="contact Us" />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://formspree.io/muhumuzareagan7@gmail.com" method="post" >
                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control"  name="name" id="name" placeholder="Raez" />
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control"  name="email" id="email" placeholder="Raez@email.com" />
                        </div>
                        {/* description */}
                        <div className="form-group">
                            <label htmlFor="Description">Description</label>
                            <textarea name="description" id="description" cols="30" rows="5" className="form-control" placeholder="Goes here" ></textarea>
                        </div>
                        {/* submit */}
                        <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5" >Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
