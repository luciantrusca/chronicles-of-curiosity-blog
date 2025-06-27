import '/src/app/globals.css'; // or './globals.css'

export default function ParchmentSpacer ({className}: {className?: string}) {
    return (
        <div className={`flex h-full max-h-full flex-col ${className}`}>
            <img src="/spacer_top.png"/>
            <img className="grow" src="spacer_middle.png"/>
            <img src="spacer_stars.png"/>
            <img src="/spacer_bottom.png"/>
        </div>
    )
}