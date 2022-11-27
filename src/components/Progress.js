const Progress_bar = ({bgcolor,progress,height}) => {

     
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: '#F3F5F7',
        borderRadius: 40,
        margin: 0,
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        bottom: 8,
        color: 'rgba(0,0,0,0.3)',
        fontWeight: 900,
        position: 'relative',
        left:32,
      }
        
    return (
    <div style={Parentdiv}>

        <div style={Childdiv}>
        <span  style={progresstext}>{`${progress}%`}</span>

        </div>

    </div>
    )
}
  
export default Progress_bar;