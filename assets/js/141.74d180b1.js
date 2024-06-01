(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{499:function(_,v,t){"use strict";t.r(v);var a=t(0),e=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1-概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[_._v("#")]),_._v(" 1 概念")]),_._v(" "),v("p",[_._v("当我们谈论分布式系统时，我们指的是一组通过网络连接的计算机，它们协同工作以完成某种共同的任务或目标。")]),_._v(" "),v("p",[_._v("在分布式系统中，通信是通过消息传递进行的。"),v("font",{attrs:{color:"red"}},[_._v("这意味着各个计算节点之间通过发送和接收消息来进行通信，而不是通过共享内存。")]),_._v("这种消息传递模型使得分布式系统的设计和实现更为灵活，因为每个节点可以独立地运行，并通过消息传递来进行协作。")],1),_._v(" "),v("p",[_._v("尽管消息传递模型具有很多优点，但也需要注意到它引入了一些复杂性。例如，需要考虑消息的传递延迟、顺序和可靠性等问题。因此，在设计分布式系统时，需要仔细考虑如何有效地管理消息传递，以确保系统的正确性和性能。")]),_._v(" "),v("blockquote",[v("p",[_._v("TIP：在设计系统或解决问题时，应该始终优先考虑在单台计算机上解决。只有在问题规模超出单台计算机的处理能力，或者需要满足高可用性、容错性等需求时，才需要考虑采用分布式系统。因此，深入了解问题的性质和需求，以及权衡利弊，是设计分布式系统的关键。")])]),_._v(" "),v("h2",{attrs:{id:"_2-驱动力和挑战"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-驱动力和挑战"}},[_._v("#")]),_._v(" 2 驱动力和挑战")]),_._v(" "),v("p",[_._v("当人们构建分布式系统时，驱动力主要包括以下几个方面：")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("追求更高的计算性能")]),_._v("：分布式系统能够利用大量的计算资源，实现并行运算，充分利用多个CPU、大容量内存和磁盘资源。")]),_._v(" "),v("li",[v("strong",[_._v("实现容错性")]),_._v("：即使在其中一台计算机发生故障时，系统仍然能够保持正常运行。")]),_._v(" "),v("li",[v("strong",[_._v("解决空间分布性问题")]),_._v("：某些问题天然具有空间分布性，需要跨越不同地理位置的计算资源和数据进行协同处理。例如，银行跨地域的资金转移需要协调不同地点的数据和操作，这就需要分布式系统来实现数据的同步和协调，以确保交易的准确性和可靠性。")]),_._v(" "),v("li",[v("strong",[_._v("提高安全性")]),_._v("：分布式系统可以通过将系统分散在多个计算机上来提高安全性。不信任的代码或系统可能存在潜在的安全风险，通过在分布式环境中运行代码并采用加密通信等安全措施，可以有效降低风险，并限制错误和攻击的影响范围。")])]),_._v(" "),v("p",[_._v("分布式系统的挑战源自其驱动力：")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("并发执行和复杂交互")]),_._v("：分布式系统中存在大量并发执行的部分，以及复杂的交互关系。这导致了在并发编程中遇到各种问题，例如同步、异步操作的管理以及处理时间依赖性。")]),_._v(" "),v("li",[v("strong",[_._v("意外故障")]),_._v("：分布式系统由多个组成部分和计算机网络组成，因此容易受到意外故障的影响。与单个计算机不同，这些组件可能在工作或停止状态之间切换，同时还受到网络中断或不稳定性的影响。")]),_._v(" "),v("li",[v("strong",[_._v("性能预期")]),_._v("：分布式系统的设计旨在实现更高的性能，例如利用大量计算资源实现并行处理。但实际评估多台计算机或磁盘臂的性能存在一定挑战，需要仔细的设计和调整以实现预期的性能水平。")])]),_._v(" "),v("h2",{attrs:{id:"_3-抽象和实现工具"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-抽象和实现工具"}},[_._v("#")]),_._v(" 3 抽象和实现工具")]),_._v(" "),v("p",[_._v("分布式系统基础架构主要包括"),v("font",{attrs:{color:"red"}},[_._v("存储、通信（网络）和计算")]),_._v("这三种类型。我们的目标是设计简单的接口，使第三方应用程序能够轻松使用这些分布式存储和计算功能，这样才能简单的在这些基础架构之上，构建第三方应用程序。")],1),_._v(" "),v("p",[_._v("通过这种抽象接口，我们可以将分布式系统的复杂性隐藏在系统内部，使用户专注于应用程序的开发。举例来说，在存储方面，用户可以将整个系统视为非分布式系统，类似于一个文件系统或者常规的编程模型，而不必担心分布式系统的细节。我们的目标是构建一个接口，使其看起来像一个非分布式存储和计算系统，但实际上却具备了分布式系统的高性能和容错性。")]),_._v(" "),v("p",[_._v("但实际上，很难能找到一个抽象来描述分布式的存储或者计算，使得它们能够像非分布式系统一样有简单易懂的接口。")]),_._v(" "),v("p",[_._v("抽象的实际实现是我们首先要考虑的问题。在构建分布式系统时，人们使用了许多工具：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("RPC（Remote Procedure Call）")]),_._v("：RPC旨在掩盖在不可靠网络上通信的复杂性，使得远程调用过程更为简单直接。")]),_._v(" "),v("li",[v("strong",[_._v("线程")]),_._v("：线程是一种重要的编程技术，可用于充分利用多核心计算机。它不仅仅是为了提高计算机的利用率，更重要的是提供了结构化的并发操作方式，简化了程序员对并发操作的处理。")]),_._v(" "),v("li",[v("strong",[_._v("分布式文件系统")]),_._v("：分布式文件系统是分布式系统中常用的存储工具之一，它提供了分布式的数据存储和访问接口。通过分布式文件系统，可以实现数据的分布式存储和管理，从而支持大规模数据处理和分布式计算任务的执行。")])]),_._v(" "),v("h2",{attrs:{id:"_4-分布式系统特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-分布式系统特性"}},[_._v("#")]),_._v(" 4 分布式系统特性")]),_._v(" "),v("h3",{attrs:{id:"_4-1-可扩展性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-可扩展性"}},[_._v("#")]),_._v(" 4.1 可扩展性")]),_._v(" "),v("p",[_._v("分布式系统的主要特性是可扩展性（Scalability）。可扩展性指的是，增加计算资源后系统能够以相应的方式提高性能或吞吐量。举例来说，如果一台计算机能够解决一定量的问题，那么增加第二台计算机后，系统能够以更快的速度解决相同数量的问题，或者在相同时间内处理更多的问题。如果由两台计算机组成的系统能够实现两倍的性能或吞吐量，那就达到了可扩展性的标准。")]),_._v(" "),v("p",[_._v("这是一个极为强大的特性，因为只需花钱就可以购买计算机。如果构建的系统能够通过增加计算机数量来提高性能或吞吐量，那将是一个巨大的成就。相比之下，通过雇佣程序员来优化系统或应用更优的算法通常是一种昂贵的方法。我们希望通过增加计算机数量，从十台提升到一千台，来应对一百倍的流量。")]),_._v(" "),v("p",[_._v("例如在构建一个常规网站时，通常会有一个HTTP服务器、一些用户和浏览器以及基于Python或PHP的Web服务器，它们与数据库进行交互。")]),_._v(" "),v("p",[_._v("在初始阶段，一台计算机可以运行Web服务器和数据库，或者将Web服务器和数据库分别部署在两台计算机上。但是，当网站突然迎来数以亿计的用户登录请求时，单一服务器显然无法满足需求。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/Web",alt:"image-20240513103410005"}})]),_._v(" "),v("p",[_._v("为了应对高流量，第一步是购买更多的Web服务器，并将用户分配到不同的服务器上。这样，不同的用户可以访问不同的Web服务器，但它们需要访问相同的数据，因此所有的Web服务器都需要与后端数据库通信。在这个阶段，通过添加更多的Web服务器来提高代码效率是一个有效的方法，前提是单个服务器不会给数据库带来过大的压力。")]),_._v(" "),v("p",[_._v("然而，可扩展性并非无限的。随着Web服务器数量的增加，数据库很可能成为性能的瓶颈。即使增加更多的Web服务器也无法解决问题。在某个临界点，系统中添加更多计算机将不再有效，而瓶颈将转移到其他地方，比如从Web服务器转移到数据库。")]),_._v(" "),v("p",[_._v("在这种情况下，必须进行一些重构工作。然而，重构一个单一的数据库是困难的，尽管可以将数据库拆分为多个来提高性能，但这需要大量的工作。")]),_._v(" "),v("h3",{attrs:{id:"_4-2-可用性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-可用性"}},[_._v("#")]),_._v(" 4.2 可用性")]),_._v(" "),v("p",[_._v("在构建系统时，使用单台计算机往往具有较高的可靠性。单台计算机通常可以长时间稳定运行，这是因为计算机和操作系统都很可靠，而且电源也很稳定。然而，如果系统由数千台计算机构成，即使每台计算机都能稳定运行一年，每天也会有多台计算机发生故障。")]),_._v(" "),v("p",[_._v("因此，大型分布式系统面临的一个主要问题是放大一些罕见问题的影响。在这样的系统中，总会有一些机器故障、运行错误、执行缓慢或执行错误任务的情况发生。网络问题也是一个常见的挑战，比如网线踩断或交换机故障。这些小问题在大规模系统中会变成持续不断的问题。")]),_._v(" "),v("p",[_._v("因此，在设计系统时必须考虑系统的容错性，即使发生错误也要能够继续运行。同时，为了简化应用开发人员的工作，需要构建一个基础架构，能够尽可能屏蔽和掩盖错误。")]),_._v(" "),v("p",[_._v("容错有多种概念和表述方式，其中一个重要思想是可用性（Availability）。通过精心设计，系统可以在特定类型的错误发生时继续提供服务，就像没有错误一样。某些系统通过多副本的方式实现可用性。比如，构建一个有两个拷贝的多副本系统，其中一个故障了，另一个仍然可以正常运行。可用性意味着在特定的故障范围内，系统仍能提供服务。")]),_._v(" "),v("p",[_._v("另一种容错特性是自我可恢复性（Recoverability），即在出现问题后系统停止工作，不再响应请求，等待修复，然后恢复正常运行。")]),_._v(" "),v("p",[_._v("可恢复性是一个重要的需求，尽管它比可用性更弱。在故障发生到修复期间，系统将完全停止工作。但修复后，系统应能正确运行，因此可恢复性至关重要。对于可恢复的系统，通常需要采取一些措施，如将最新数据存储在磁盘中，以便在供电恢复后检索。甚至对于具备可用性的系统，在实际应用中，也需要具备可恢复性。")]),_._v(" "),v("p",[_._v("为了实现这些特性，有两个关键工具。")]),_._v(" "),v("ul",[v("li",[_._v("一个是非易失存储（Non-volatile storage），如硬盘或闪存，用于存储系统状态的checkpoint或日志。这样，即使出现电源故障，系统也能从存储中读取最新状态，并继续运行。")]),_._v(" "),v("li",[_._v("另一个重要工具是复制（Replication），即通过多副本系统实现容错。管理复制的多副本系统可能会面临同步偏移等问题，这在容错系统中是一个挑战。")])]),_._v(" "),v("h3",{attrs:{id:"_4-3-一致性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-一致性"}},[_._v("#")]),_._v(" 4.3 一致性")]),_._v(" "),v("p",[_._v("最后一个很重要的特性是一致性（Consistency）。一致性定义了操作的行为，特别是在分布式系统中。在分布式存储系统中，例如键值（KV）服务，put操作将一个值存储到一个键中，而get操作从键中获取值。在分布式系统中，多个副本可能存在不同版本的数据，因此一致性变得至关重要。")]),_._v(" "),v("p",[_._v("强一致性（Strong Consistency）要求get请求总是返回最近一次完成的put请求写入的值，这确保了数据的完全一致。然而，实现强一致性需要大量的通信和延迟。弱一致性（Weak Consistency）不保证get请求获取到最新的数据，但通常可以提供更高的性能。")]),_._v(" "),v("p",[_._v("因此，为了尽可能减少通信，特别是当副本相距很远时，人们会构建弱一致性系统，只需要更新最近的数据副本，并且只需要从最近的副本获取数据，并允许读取旧数据。当然，为了使弱一致性更具实际意义，人们会定义更多的规则。")]),_._v(" "),v("h2",{attrs:{id:"_5-mapreduce论文阅读笔记"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-mapreduce论文阅读笔记"}},[_._v("#")]),_._v(" 5 MapReduce论文阅读笔记")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/hzf0701/article/details/138770454?spm=1001.2014.3001.5501",target:"_blank",rel:"noopener noreferrer"}},[_._v("MapReduce论文阅读笔记"),v("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=e.exports}}]);