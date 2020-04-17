import React from "react";

export default function User({ user }) {
    return <div>
        <h4 className="text-muted">{user.login}</h4>
        <img className="rounded img img-thumbnail" width="120" height="120" src={user.avatar_url} />
    </div>
}