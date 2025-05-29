# bwts

> BlockWise TS Runtime

# 目标

主目标：

1. 是一个简易的 BlockWise Flow TS Runtime，用作协议和产品设计的非 Python 环境参考
1. 由于 FlowEditorSDK Schema、BlockWise Schema 复杂度越来越高，只是通过协议文本来判断已经不太够用。通过 bwts，验证 schemas 的设计合理性、抽象度、扩展性 等
1. bw 迟迟不能推出 python 之外的运行时环境，对于平台的多语言扩展性的挑战越来越大，需要一个非 python runtime 作为产品设计时的参考
1. 暂定 Browser 环境运行，可移植到 node 环境

其他目标：

1. 工程和架构优化的试验田
1. 验证 code copilot

## 非目标

1. 不追求成为完备的 TS Runtime
2. 不是一个 bw-project 2 ts-project 项目，专注在 flow tuntime
