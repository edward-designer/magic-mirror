import './DropUpload.styles.scss';

const DropUpload =({ data, dispatch, onImageChange}) => {
  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth + 1 });
  };
  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth - 1 });
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
  };
  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true });};
  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    let files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
        onImageChange(files);
        e.dataTransfer.clearData();
        dispatch({ type: 'SET_DROP_DEPTH', dropDepth: 0 });
        dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
    }
  };
  return (
    <div className={data.inDropZone ? 'drag-drop-zone inside-drag-area' : 'drag-drop-zone'}
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleDragOver(e)}
      onDragEnter={e => handleDragEnter(e)}
      onDragLeave={e => handleDragLeave(e)}
    >
      <p>Drag files here to upload</p>
    </div>
  );
};
export default DropUpload;